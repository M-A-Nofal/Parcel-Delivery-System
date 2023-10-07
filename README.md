# Parcel Delivery System

## How do you get the app up and running : -

• Clone the app git clone `https://github.com/M-A-Nofal/Parcel-Delivery-System`
</br>

• Open Visual studio code or any software like.
</br>

• Open the project directory and run these commands :
</br>

        `docker run --publish 3000:3000 docker_nextjs:development`
        `npx prisma migrate dev`
        `npm run seed`
        `npm run dev`
• For the senders login info: 

        user: `sender1@s.com`, `sender2@s.com`, `sender3@s.com`, `sender4@s.com` or `sender5@s.com`
        
        pass: `12345678`
        
• For the bikers login info:
        
        user: `biker1@b.com`,`biker2@b.com`, `biker3@b.com`, `biker4@b.com`, `biker5@b.com`, `biker6@b.com`, `biker7@b.com`, `biker8@b.com`, `biker9@b.com` or `biker10@b.com`
        
        pass: `12345678`

## Which framework is used : -

• Nextjs version 13

## Which Libraries are used : -

`"@next-auth/prisma-adapter": "^1.0.7"`
`"@prisma/client": "^5.3.1"`
`"@tanstack/react-query": "^4.35.7"`
`"bcrypt": "^5.1.1"`
`"next-auth": "^4.23.1"`
`"prisma": "^5.3.1"`
`"react-datepicker": "^4.18.0"`

## What database is used :-
• Postgresql

## The problems to be solved are:-
• A sender should be able to create a parcel to be delivered by specifying pick-up and drop-off
</br>

• address (should be just a text field, no need for address validation)
</br>

• A sender should be able to see the status of his parcels.
</br>

• A biker should be able to see a list of the parcels.
</br>

• A biker should be able to pick up a parcel.
</br>

• Once a parcel is picked up by a biker, it cannot be picked up by other bikers.
</br>

• A biker should be able to input the timestamp of the pickup and the delivery for each order.
</br>

• The status of the order should be updated for the sender.
</br>
