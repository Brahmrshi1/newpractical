const EventEmitter = require ('events');
 class server extends EventEmitter {

    constructor(client){
        super();
        this.task={};
        this.taskID=1;
        process.nextTick(()=>{
            this.emit('response','Type a  command')
        })
        client.on('command',(command, args)=>{

            switch(command)
            {
                case 'help':
                case 'add':
                case 'ls':
                case 'delete':
                this[command]();
                break;

                default:
                this.emit('response','unknoen command.........')
            }
            
        })

    }

    taskString(){
        return Object.keys(this.task).map(key=>{
            return(key + this.task[key]) 
        }).join('\n');
    }
    help(){
        this.emit('response','Available command is: add ls delete ')

    }
    add(args){
        this.task[this.taskID]=args
        this.emit('response','Add task is '+this.taskID)
        this.taskID++
    }
    ls(){
        this.emit('response','list is ' + this.taskString());
        
    }
    delete(args){
        delete(this.task[args]);
        this.emit('response', 'Deleted task is  ' + args);
        
    }

 }
 module.exports =(client)=> new server(client);