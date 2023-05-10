using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;

namespace ProductApi.Controllers
{
    [ApiController]
    [EnableCors]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {

        private readonly ILogger<ProductsController> _logger;
        private List<Product> _products;

        public ProductsController(ILogger<ProductsController> logger)
        {
            _logger = logger;
            _products = JsonConvert.DeserializeObject<List<Product>>(System.IO.File.ReadAllText("products.json"));
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_products);
        }

        [HttpGet("{id}")]
        public IActionResult GetProduct(int id)
        {
            var product = _products.SingleOrDefault(p => p.ProductId == id);
            if(product != null)
            {
                return Ok(product);
            }
            return NotFound();
        }
    }
}
