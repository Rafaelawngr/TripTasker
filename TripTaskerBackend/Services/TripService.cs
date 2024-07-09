using Microsoft.EntityFrameworkCore;
using TripTaskerBackend.Data;
using TripTaskerBackend.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TripTaskerBackend.Services
{
    public class TripService : ITripService
    {
        private readonly ApplicationDbContext _context;

        public TripService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<Trip>> GetTripsAsync()
        {
            return await _context.Trips.ToListAsync();
        }

        public async Task<Trip?> GetTripByIdAsync(int tripId)
        {
            return await _context.Trips.FindAsync(tripId);
        }

        public async Task<Trip> CreateTripAsync(string title)
        {
            var newTrip = new Trip
            {
                Title = title
            };

            _context.Trips.Add(newTrip);
            await _context.SaveChangesAsync();

            return newTrip;
        }

        public async Task UpdateTripAsync(int tripId, Trip trip)
        {
            var existingTrip = await _context.Trips.FindAsync(tripId);
            if (existingTrip != null)
            {
                existingTrip.Title = trip.Title;
                await _context.SaveChangesAsync();
            }
        }

        public async Task DeleteTripAsync(int tripId)
        {
            var trip = await _context.Trips.FindAsync(tripId);
            if (trip != null)
            {
                _context.Trips.Remove(trip);
                await _context.SaveChangesAsync();
            }
        }
    }
}
