// script.js

function add (a, b, c) { a + b + c}

function multiply (a, b, c)  { a - b - c}

function internal () {
	const added = this.add(this.a, this.b, this.c)
	this.multiply(this.a, this.b, this.c)
	return this
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()