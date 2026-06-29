import React, { useEffect ,useState} from 'react'

export const Effecthook = () => {

    const[color,setColor] = useState("red");
    const [size, setSize] = useState(20);
        useEffect(()=>{
            const interval = setInterval(()=>{
                // setMessage(prev => prev === "red"?"blue":"red");
                setColor(color => color === "red"?"blue":"red");
                setSize(size => size + 20);
            },1000);
            //After 10 seconds the font size and color change will be stopped
             const timer = setTimeout(() => {
                clearInterval(interval);
            }, 10000);

            return() => {clearInterval(interval);
                clearTimeout(timer);
            }//cleanup
        },[]);
    return (
        <div style ={{textAlign:"center",marginTop:"50px"}}>
            {/* <h1 >Message</h1> */}
            <h1
            style={{
            color: color,
            fontSize: size
            }}
        >Message</h1>
        </div>
    );
    }