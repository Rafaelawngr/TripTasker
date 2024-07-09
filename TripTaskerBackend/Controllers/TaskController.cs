using Microsoft.AspNetCore.Mvc;
using TripTaskerBackend.Models;
using TripTaskerBackend.Services;

namespace TripTaskerBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TaskController : ControllerBase
    {
        private readonly ITaskService _taskService;

        public TaskController(ITaskService taskService)
        {
            _taskService = taskService;
        }

        [HttpGet("{tripId}")]
        public async Task<IActionResult> GetTasks(int tripId)
        {
            var tasks = await _taskService.GetTasksAsync(tripId);
            return Ok(tasks);
        }

        [HttpPost("{tripId}")]
        public async Task<IActionResult> CreateTask(int tripId, TaskItem newTask)
        {
            var task = await _taskService.CreateTaskAsync(tripId, newTask);
            return CreatedAtAction(nameof(GetTasks), new { tripId = tripId }, task);
        }

        [HttpPut("{taskId}")]
        public async Task<IActionResult> UpdateTask(int taskId, TaskItem updatedTask)
        {
            var task = await _taskService.UpdateTaskAsync(taskId, updatedTask);
            if (task == null)
            {
                return NotFound();
            }
            return Ok(task);
        }

        [HttpDelete("{taskId}")]
        public async Task<IActionResult> DeleteTask(int taskId)
        {
            await _taskService.DeleteTaskAsync(taskId);
            return NoContent();
        }

        [HttpPut("{taskId}/status")]
        public async Task<IActionResult> MoveTaskToStatus(int taskId, TaskProgress newStatus)
        {
            var task = await _taskService.UpdateTaskStatusAsync(taskId, newStatus);
            if (task == null)
            {
                return NotFound();
            }
            return Ok(task);
        }
    }
}
