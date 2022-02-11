const express = require("express");
const app = express();
const morgan = require("morgan");
const got = require("got");
const bodyParser = require("body-parser");

app.use(morgan("dev"));
app.set("view engine", "ejs");

app.get("/campgrounds", (req, res) => {
	let campgrounds = [
		{
			name: "Salmon Creek",
			image:
				"https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=647&q=80",
		},
		{
			name: "Granite Hill",
			image:
				"https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
		},
		{
			name: "Mountain Goat's Rest",
			image:
				"https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
		},
	];

	res.render("campgrounds", { campgrounds: campgrounds });
});

app.listen(process.env.PORT, () => {
	console.log(`Listening on port ${process.env.PORT}...`);
});
