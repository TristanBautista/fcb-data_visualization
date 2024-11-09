console.log("Hello World!");
// log displays in the browser console the contents of the log
const dateElement = document.getElementById('date');
console.log(dateElement);

// gets current date
let currentDate = new Date();

let dataOptions = { year: "numeric", month: "long", day: "numeric" };
dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dataOptions);


const url = "https://fakestoreapi.com/products"
const options = {
};

//Requests to get data
fetch(url, options)
.then(res => res.json())
.then(data => {
	console.log(data);

/*
	let products = [
	    {
	        title: "Lips Stick",
	        price: 199.9,
	        description: "Rose Red Lipstick",
	        category: "beauty product",
	        image: null,
	        rating: {
	            rate: 5,
	            count: 100
	        }
	    },
	    {
	        title: "Lips Stick 2",
	        price: 199.9,
	        description: "Lush Pink Lipstick",
	        category: "beauty product",
	        image: null,
	        rating: {
	            rate: 4,
	            count: 100
	        }
	    }
	];

	console.log(products);
	console.log(products[0].title);
	console.log(products[0].price);
	console.log(products[0].rating.rate);
*/

	let titles = data.map(object => {
		return object.title;
	});
		
	console.log(titles);

	let ratings = data.map(object => {
		return object.rating.rate;

	})
	console.log(ratings);

	const myChart = document.getElementById('myChart');

	let barChart = new Chart(myChart, {
		type: 'bar',
		data:{
			labels: titles,
			datasets: [{
				label:'Ratings of Products',
				data: ratings,
				borderWidth: 2,
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
		    		'rgba(255, 159, 64, 0.2)',
		    		'rgba(255, 205, 86, 0.2)',
		    		'rgba(75, 192, 192, 0.2)',
		    		'rgba(54, 162, 235, 0.2)',
		    		'rgba(153, 102, 255, 0.2)',
		    		'rgba(201, 203, 207, 0.2)'
				],
				borderColor: [
					'rgb(255, 99, 132)',
		    		'rgb(255, 159, 64)',
		    		'rgb(255, 205, 86)',
		    		'rgb(75, 192, 192)',
		    		'rgb(54, 162, 235)',
		    		'rgb(153, 102, 255)',
		    		'rgb(201, 203, 207)'
				],

				hoverBackgroundColor: [
					'rgb(255, 99, 132)',
		    		'rgb(255, 159, 64)',
		    		'rgb(255, 205, 86)',
		    		'rgb(75, 192, 192)',
		    		'rgb(54, 162, 235)',
		    		'rgb(153, 102, 255)',
		    		'rgb(201, 203, 207)'
				]
			}]
		},
		options: {
			indexAxis: 'x',
			scales: {
				y: {
					beginAtZero: true

				}
			}
		}

	})

})