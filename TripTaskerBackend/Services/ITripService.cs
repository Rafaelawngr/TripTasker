using TripTaskerBackend.Models;

namespace TripTaskerBackend.Services
{
    public interface ITripService
    {
        Task<List<Trip>> GetTripsAsync();
        Task<Trip?> GetTripByIdAsync(int tripId);
        Task<Trip> CreateTripAsync(string title);
        Task UpdateTripAsync(int tripId, Trip trip);
        Task DeleteTripAsync(int tripId);
    }
}
