using Microsoft.EntityFrameworkCore;
using TripTaskerBackend.Data;
using TripTaskerBackend.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TripTaskerBackend.Services
{
    public class UserService : IUserService
    {
        private readonly ApplicationDbContext _context;

        public UserService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<User?> GetUserByIdAsync(int userId)
        {
            return await _context.Users.FindAsync(userId);
        }

        // Implementação dos métodos relacionados a trips

        public async Task<Trip> CreateTripAsync(int userId, Trip newTrip)  
        {
            _context.Trips.Add(newTrip);
            await _context.SaveChangesAsync();
            return newTrip;
        }

        public async Task<Trip?> UpdateTripAsync(int tripId, Trip updatedTrip) 
        {
            var trip = await _context.Trips.FindAsync(tripId);
            if (trip == null)
            {
                return null;
            }

            trip.Title = updatedTrip.Title;

            await _context.SaveChangesAsync();
            return trip;
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

        public async Task<IEnumerable<Trip>> GetTripsAsync() 
        {
            return await _context.Trips.ToListAsync();
        }

        public Task<IEnumerable<Trip>> GetTripsAsync(int userId) 
        {
            throw new NotImplementedException();
        }

        public Task<Trip?> UpdateTripAsync(int userId, int tripId, Trip updatedTrip) 
        {
            throw new NotImplementedException();
        }

        public Task DeleteTripAsync(int userId, int tripId)
        {
            throw new NotImplementedException();
        }

        public Task<User> RegisterAsync(string username, string email, string password)
        {
            throw new NotImplementedException();
        }

        public Task<User?> LoginAsync(string username, string password)
        {
            throw new NotImplementedException();
        }
    }
}
