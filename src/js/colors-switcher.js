
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    body: document.body,
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const timer = {
    intervalID: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return;
       }
      this.isActive = true;
      refs.startBtn.disabled = true;
        this.intervalID = setInterval(() =>{ 
        const min = 0;
        const max = colors.length - 1;
        let i = randomIntegerFromInterval(min, max);
        refs.body.style.backgroundColor = colors[i];
    }, 1000);
    },
    stop() {
        clearInterval(this.intervalID);
      this.isActive = false;
      this.intervalID = null;
       refs.startBtn.disabled = false;
  },
};

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));
    
    
            
        
    

