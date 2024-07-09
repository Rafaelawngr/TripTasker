using Microsoft.EntityFrameworkCore;
using TripTaskerBackend.Models;

namespace TripTaskerBackend.Data
{
    public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
    {
        public DbSet<TaskItem> TaskItems { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Trip> Trips { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<TaskItem>(entity =>
            {
                entity.HasKey(e => e.TaskId);
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.UserId);
            });

            modelBuilder.Entity<Trip>(entity =>
            {
                entity.HasKey(e => e.TripId);
            });
        }
    }
}
