import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../assets/wlogo.jpg"; 

const Whatsapp = () => {
    return (
        <FloatingWhatsApp  
            accountName="Travel Platform UAE" 
            phoneNumber="+971522345572" 
            avatar={logo.src}  
            statusMessage="Live chat now"
            chatMessage="Welcome to Travel Platform UAE! 🤝 How can we assist you today?"
        />
    );
};

export default Whatsapp;
