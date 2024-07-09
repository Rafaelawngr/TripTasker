using System.Threading.Tasks;
using TripTaskerBackend.Models;

namespace TripTaskerBackend.Services
{
    public interface IAuthService
    {
        Task<User> RegisterAsync(string username, string email, string password);
        Task<string> LoginAsync(string username, string password); 
    }
}
