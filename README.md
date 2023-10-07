Parcel Delivery System

How do you get the app up and running : -
• Clone the app git clone https://github.com/M-A-Nofal/Parcel-Delivery-System
• Open Visual studio code or any software like.
• Open the project directory and run these commands

        docker run --publish 3000:3000 docker_nextjs:development
        npx prisma migrate dev
        npm run seed
        npm run dev

Which framework is used : -
• Nextjs version 13

Which Libraries are used : -
• "@next-auth/prisma-adapter": "^1.0.7",
• "@prisma/client": "^5.3.1",
• "@tanstack/react-query": "^4.35.7",
• "bcrypt": "^5.1.1",
• "generate": "^0.14.0",
• "next-auth": "^4.23.1",
• "prisma": "^5.3.1",
• "react-datepicker": "^4.18.0",

What database is used :-
• Postgresql

The problems to be solved are:-
• A sender should be able to create a parcel to be delivered by specifying pick-up and drop-off
• address (should be just a text field, no need for address validation)
• A sender should be able to see the status of his parcels.
• A biker should be able to see a list of the parcels.
• A biker should be able to pick up a parcel.
• Once a parcel is picked up by a biker, it cannot be picked up by other bikers.
• A biker should be able to input the timestamp of the pickup and the delivery for each order.
• The status of the order should be updated for the sender.
