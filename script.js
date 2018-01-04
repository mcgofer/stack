var Stack = function () {
    this.stack = [];

    this.print = function () {
        console.log(this.stack);
    }

    this.push = function (x) {
        //your code here (adds x to the top of the stack)
        var newItem = this.stack.length;
        this.stack.splice(newItem, 1, x);
    }

    this.isEmpty = function () {
        //your code here (tests if the Stack is empty)
        if (this.stack.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    this.peek = function () {
        //your code here (returns a value)
        var lastValue = this.stack.length - 1;
        return (this.stack[lastValue]);
    }

    this.pop = function () {
        //your code here (returns a value as well as removing top item from the stack)
        var lastValue = this.stack.length - 1;
        this.stack.splice(lastValue, 1);
        return (this.stack[lastValue]);
    }
}

//Use this code to test your stack:

var myStack = new Stack();
console.log(myStack.isEmpty());    //true
console.log(myStack.print());      //[]
console.log(myStack.push(2));
console.log(myStack.isEmpty());     //false
console.log(myStack.push(4));
console.log(myStack.print());      //[2,4]
console.log(myStack.peek());       //4
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.peek());       //null
console.log(myStack.isEmpty());    //true



// Answers
// var Stack = function() {
    
//         this.stack = [];
        
//         this.print = function() {
//             console.log(this.stack);
//         }
    
//         this.push = function(x) {
//             this.stack[this.stack.length] = x;
//         }
    
//         this.isEmpty = function() {
//             return this.stack.length == 0;
//         }
    
//         this.peek = function() {
//             if (!this.isEmpty()) {
//                 return this.stack[this.stack.length - 1]
//             }
//             return null;
//         }
    
//         this.pop = function() {
//             if (!this.isEmpty()) {
//                 return this.stack.splice(this.stack.length - 1, 1)[0];
//             }
//             return null;
//         }
//     }




//Get min solution

// var MinValueStack = function() {
//     this.stack = [];
//     this.minValues = new Stack();

//     this.print = function() {
//         console.log(this.stack);
//     }

//     this.push = function(x) {
//         this.stack[this.stack.length] = x;
//         //below we added code for storing the minimum value
//         if (x < this.getMin() || this.getMin() == null) {
//             this.minValues.push(x);
//         }
//     }

//     this.isEmpty = function() {
//         return this.stack.length == 0;
//     }

//     this.peek = function() {
//         if (!this.isEmpty()) {
//             return this.stack[this.stack.length - 1]
//         }
//         return null;
//     }

//     this.pop = function() {
//         //below the code has been modified to make sure the minimum value is 
//         //also popped from minValue if it is popped form the main stack
//         if (!this.isEmpty()) {
//             if (this.peek() == this.getMin()) {
//                 this.minValues.pop();
//             }
//             return this.stack.splice(this.stack.length - 1, 1);
//         }
//         return null;
//     }

//     this.getMin = function() {
//         if (!this.isEmpty()) {
//             return this.minValues.peek();
//         }
//         return null;
//     }
// }

// var myMinValueStack = new MinValueStack();



//Queue 


var Queue = function () {
    this.queue = [];

    this.print = function () {
        console.log(this.queue);
    }

    this.enqueue = function (x) {
        //your code here (adds x to the top of the stack)
        this.queue[this.queue.length] = x;
    }

    this.isEmpty = function () {
        //your code here (tests if the Stack is empty)
        if (this.queue.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    this.peek = function () {
        //your code here (returns a value)
        var lastValue = this.queue.length - 1;
        return (this.queue[lastValue]);
    }

    this.dequeue = function () {
        //your code here (returns a value as well as removing top item from the stack)
        this.queue.splice(0, 1);
        return (this.queue[0]);
    }
}
