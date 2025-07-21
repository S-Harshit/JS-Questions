// Implement stack max and min using js


class Stack {
    constructor() {
        this.nums = [];
        this.length = 0;
    } 
    
    push(num) {
        if(this.length===0) {
            this.nums[this.length] = {current:num, max:num, min:num};
            this.length++
            return;
        }
        
        const currentMax = Math.max(this.nums[this.length-1].max, num);
        const currentMin = Math.min(this.nums[this.length-1].min, num);
        const element = {current:num, max:currentMax, min:currentMin};
        
        
        this.nums[this.length] = element ;
        this.length++
        
    }
    
    printStack() {
        for(let i=0;i<this.length;i++) {
            console.log(this.nums[i].current);
        }
    }
    
    max() {
        if(this.length === 0) {
            console.log("stack is empty")
            return;
        }
        console.log("current max " +this.nums[this.length-1].max);
    }
    
    min() {
           if(this.nums.length === 0) {
           console.log("stack is empty")
            return;
        }
         console.log("current min " + this.nums[this.length-1].min);
    }
    
    pop() {
        if(this.length === 0) {
            console.log("stack is empty")
            return;
        }
        this.length--;
        console.log(this.nums[this.length].current)
        this.nums[this.length] = undefined;
       
    }
}

const stack = new Stack();

stack.push(0);
stack.push(-1);
stack.push(5);
stack.push(6);

stack.printStack();

stack.max();
stack.min();
stack.pop()
stack.max();
stack.min();
stack.pop()
stack.max();
stack.min();
stack.pop()
stack.max();
stack.min();
stack.pop()










