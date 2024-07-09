namespace TripTaskerBackend.Models {
    public class Trip {
        public int TripId { get; set; }
        public required string Title { get; set; } 
        public ICollection<TaskItem> TaskItems { get; set; } = [];
    }
}


