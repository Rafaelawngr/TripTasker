namespace TripTaskerBackend.Models {
    public class LoginRequest  {
        public required string Username { get; set; }
        public required string Password { get; set; }
    }
    public class RegisterRequest  {
        public required string Email { get; set; }
        public required string Username { get; set; }
        public required string Password { get; set; }
    }
}

