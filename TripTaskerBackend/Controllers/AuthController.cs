using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using TripTaskerBackend.Models;
using TripTaskerBackend.Services;
using TripTaskerBackend.Exceptions;

namespace TripTaskerBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterAsync([FromBody] RegisterRequest model)
        {
            try
            {
                var user = await _authService.RegisterAsync(model.Username, model.Email, model.Password);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro interno ao registrar usuário: {ex.Message}");
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> LoginAsync([FromBody] LoginRequest model)
        {
            try
            {
                var token = await _authService.LoginAsync(model.Username, model.Password);
                return Ok(new { Token = token });
            }
            catch (AuthenticationException ex)
            {
                return Unauthorized(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro interno ao fazer login: {ex.Message}");
            }
        }
    }
}
