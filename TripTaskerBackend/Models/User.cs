namespace TripTaskerBackend.Models {
    public class User {
        public int UserId { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public ICollection<Trip> Trips { get; set; } = new List<Trip>();
    }
}



