import {useState,useEffect} from 'react'

export const ColorBox = ({rgb,id}) => {
    const [isClick, setIsClick] = useState(false)
    const [hexColorVal, setHexColorVal] = useState('#ffffff')
    useEffect(() => {
        setTimeout(() => {
            setIsClick(false)
        }, 2000);
    }, [isClick])
    useEffect(() => {
    setHexColorVal(getHex(rgb))
    }, [rgb])
    const rgbToHex=(rbgVal)=>{
        const hexVal = rbgVal.toString(16)
        return hexVal.length===1 ? '0'+hexVal:hexVal;
    }

    const getHex =(rgb)=>{
        return `#${rgbToHex(rgb[0])}${rgbToHex(rgb[1])}${rgbToHex(rgb[2])}`
    }
    return (
        <aside style={{backgroundColor:`rgb(${rgb})`,color:`${id<11?"black":"white"}`}} onClick={()=>{
            setIsClick(true);
            navigator.clipboard.writeText(hexColorVal)}}>
            <h5>{hexColorVal}</h5>
            {isClick?<h6 className="copied" style={{backgroundColor:`${id<11?"#77d4ff":"#082a3a"}`}}>Copied To Clipboard</h6>:null}
        </aside>
    )
}
