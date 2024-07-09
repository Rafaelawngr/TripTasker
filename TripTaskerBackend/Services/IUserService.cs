using System.Collections.Generic;
using System.Threading.Tasks;
using TripTaskerBackend.Models;

namespace TripTaskerBackend.Services
{
    public interface IUserService
    {
        Task<User?> GetUserByIdAsync(int userId);
        Task<Trip> CreateTripAsync(int userId, Trip newTrip);
        Task<Trip?> UpdateTripAsync(int tripId, Trip updatedTrip);
        Task DeleteTripAsync(int tripId);
        Task<IEnumerable<Trip>> GetTripsAsync();
        Task<IEnumerable<Trip>> GetTripsAsync(int userId);
        Task<Trip?> UpdateTripAsync(int userId, int tripId, Trip updatedTrip);
        Task DeleteTripAsync(int userId, int tripId);
    }
}
