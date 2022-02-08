function PriorityQueue () {
    this.collection = [];
    this.printCollection = function() {
      console.log(this.collection);
    };
    // Only change code below this line
    this.enqueue = function(element){
      if(this.collection.length==0)
        this.collection.push(element);
      else{
        let index = this.collection.map((x,i) => {
          if(x[1] > element[1])
            return -1;
          else if(x[1]==element[1])
            return -2;
          else return -3;
        });

        if(index.indexOf(-1)!=-1){
            let min = index.indexOf(-1);
            this.collection = [...this.collection.slice(0, min), element, ...this.collection.slice(min)];
        }
        else if(index.indexOf(-2)!=-1){
            let n_times = index.filter(x=> x==-2).length;
            let min = index.indexOf(-2, n_times-1) + 1;
            this.collection = [...this.collection.slice(0, min), element, ...this.collection.slice(min)];
        }
        else{
            this.collection.push(element);
        }
      }
    };
  
    this.dequeue = function(){
      return this.collection.shift()[0];
    };
  
    this.size = function() {
      return this.collection.length;
    };
  
    this.front = function(){
      return this.collection[0][0];
    }
  
    this.isEmpty = function(){
      return this.collection.length===0 ? true : false;
    }
    // Only change code above this line
  }
  
  let a = new PriorityQueue();
  a.enqueue(['kitten', 2])
  a.enqueue(['kitten', 2])
  a.enqueue(['kitten', 1]) 
  a.enqueue(['kitten', 2])
  a.enqueue(['kitten', 2])   
  a.printCollection()