import CustomerDetails from '../models/customer.model';

// Add customer details 

export const customerDetails= async(body)=>{
    const details= await CustomerDetails.create(body);
    if(details){
        console.log(details);
        return details;
    }
}