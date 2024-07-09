using Microsoft.AspNetCore.Mvc;
using TripTaskerBackend.Models;
using TripTaskerBackend.Services;

namespace TripTaskerBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController(IUserService userService) : ControllerBase
    {
        private readonly IUserService _userService = userService;

        [HttpGet("{userId}/trips")]
        public async Task<IActionResult> GetTrips(int userId)
        {
            var trips = await _userService.GetTripsAsync(userId);
            return Ok(trips);
        }

        [HttpPost("{userId}/trips")]
        public async Task<IActionResult> CreateTrip(int userId, [FromBody] Trip newTrip)
        {
            var createdTrip = await _userService.CreateTripAsync(userId, newTrip);
            return Ok(createdTrip);
        }

        [HttpPut("{userId}/trips/{tripId}")]
        public async Task<IActionResult> UpdateTrip(int userId, int tripId, [FromBody] Trip updatedTrip)
        {
            var updated = await _userService.UpdateTripAsync(userId, tripId, updatedTrip);
            if (updated == null)
            {
                return NotFound();
            }
            return Ok(updated);
        }

        [HttpDelete("{userId}/trips/{tripId}")]
        public async Task<IActionResult> DeleteTrip(int userId, int tripId)
        {
            await _userService.DeleteTripAsync(userId, tripId);
            return NoContent();
        }
    }
}
