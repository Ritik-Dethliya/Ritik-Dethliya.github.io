import { useRef } from "react";
import { X } from 'lucide-react';
import skillshare from '../assets/skillshare.png'
import caloricounter from '../assets/Caloricounter.png'
function ImageComponent({project,setProject}) {
    const curImageRef=useRef(0)
    const images={
        CaloriSeeker:[caloricounter],
        SkillShare:[skillshare]
    }
    return (  
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
                
                <div className="w-full max-w-[500px] aspect-video relative">
                    <img
                    src={caloricounter}
                    alt=''
                    className="rounded-lg shadow-lg object-cover w-full h-full"
                    />
                    <X size={28} className="absolute top-12 right-12 text-white hover:text-red-400 transition-all"/>
                </div>
                
            </div>
            
        </>
    );
}

export default ImageComponent;