using Microsoft.AspNetCore.Mvc;
using TripTaskerBackend.Models;
using TripTaskerBackend.Services;

namespace TripTaskerBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TripController(ITripService tripService) : ControllerBase
    {
        private readonly ITripService _tripService = tripService;

        [HttpGet]
        public async Task<ActionResult<List<Trip>>> GetTrips()
        {
            var trips = await _tripService.GetTripsAsync();
            return Ok(trips);
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Trip>> GetTrip(int id)
        {
            var trip = await _tripService.GetTripByIdAsync(id);
            if (trip == null)
            {
                return NotFound();
            }
            return Ok(trip);
        }

        [HttpPost]
        public async Task<ActionResult<Trip>> CreateTrip([FromBody] Trip trip)
        {
            var newTrip = await _tripService.CreateTripAsync(trip.Title);
            return CreatedAtAction(nameof(GetTrip), new { id = newTrip.TripId }, newTrip);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTrip(int id, [FromBody] Trip trip)
        {
            if (id != trip.TripId)
            {
                return BadRequest();
            }

            await _tripService.UpdateTripAsync(id, trip);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTrip(int id)
        {
            await _tripService.DeleteTripAsync(id);
            return NoContent();
        }
    }
}
