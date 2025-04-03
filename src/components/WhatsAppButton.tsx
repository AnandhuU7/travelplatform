import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '../assets/wlogo.jpg';   

const Whatsapp = () => {
    const logoUrl = logo.src;
    return <FloatingWhatsApp  
    accountName='Travel Platform UAE' 
    phoneNumber='+971522345572' 
    avatar={logoUrl} 
    statusMessage="Live chat now"
    chatMessage="Welcome to Travel Platform UAE 🤝. How can we help?"
    />
}

export default Whatsapp;