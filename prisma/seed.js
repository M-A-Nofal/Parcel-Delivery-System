const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Do stuff
  await prisma.sender.createMany({
    data: [
      {
        userName: "sender 1",
        email: "sender1@s.com",
        password:
          "$2a$04$SiFMMuorZ5HdqIONH/59k.fZQyHg6nrdvi7FcGt/0mz.SSQfWUwYW",
        role: "sender",
      },
      {
        userName: "sender 2",
        email: "sender2@s.com",
        password:
          "$2a$04$SiFMMuorZ5HdqIONH/59k.fZQyHg6nrdvi7FcGt/0mz.SSQfWUwYW",
        role: "sender",
      },
      {
        userName: "sender 3",
        email: "sender3@s.com",
        password:
          "$2a$04$SiFMMuorZ5HdqIONH/59k.fZQyHg6nrdvi7FcGt/0mz.SSQfWUwYW",
        role: "sender",
      },
      {
        userName: "sender 4",
        email: "sender4@s.com",
        password:
          "$2a$04$SiFMMuorZ5HdqIONH/59k.fZQyHg6nrdvi7FcGt/0mz.SSQfWUwYW",
        role: "sender",
      },
      {
        userName: "sender 5",
        email: "sender5@s.com",
        password:
          "$2a$04$SiFMMuorZ5HdqIONH/59k.fZQyHg6nrdvi7FcGt/0mz.SSQfWUwYW",
        role: "sender",
      },
    ],
  });

  await prisma.biker.createMany({
    data: [
      {
        userName: "biker 1",
        email: "biker1@b.com",
        password:
          "$2a$04$SiFMMuorZ5HdqIONH/59k.fZQyHg6nrdvi7FcGt/0mz.SSQfWUwYW",
        role: "biker",
      },
      {
        userName: "biker 2",
        email: "biker2@b.com",
        password:
          "$2a$04$SiFMMuorZ5HdqIONH/59k.fZQyHg6nrdvi7FcGt/0mz.SSQfWUwYW",
        role: "biker",
      },
      {
        userName: "biker 3",
        email: "biker3@b.com",
        password:
          "$2a$04$SiFMMuorZ5HdqIONH/59k.fZQyHg6nrdvi7FcGt/0mz.SSQfWUwYW",
        role: "biker",
      },
      {
        userName: "biker 4",
        email: "biker4@b.com",
        password:
          "$2a$04$SiFMMuorZ5HdqIONH/59k.fZQyHg6nrdvi7FcGt/0mz.SSQfWUwYW",
        role: "biker",
      },
      {
        userName: "biker 5",
        email: "biker5@b.com",
        password:
          "$2a$04$SiFMMuorZ5HdqIONH/59k.fZQyHg6nrdvi7FcGt/0mz.SSQfWUwYW",
        role: "biker",
      },
      {
        userName: "biker 6",
        email: "biker6@b.com",
        password:
          "$2a$04$SiFMMuorZ5HdqIONH/59k.fZQyHg6nrdvi7FcGt/0mz.SSQfWUwYW",
        role: "biker",
      },
      {
        userName: "biker 7",
        email: "biker7@b.com",
        password:
          "$2a$04$SiFMMuorZ5HdqIONH/59k.fZQyHg6nrdvi7FcGt/0mz.SSQfWUwYW",
        role: "biker",
      },
      {
        userName: "biker 8",
        email: "biker8@b.com",
        password:
          "$2a$04$SiFMMuorZ5HdqIONH/59k.fZQyHg6nrdvi7FcGt/0mz.SSQfWUwYW",
        role: "biker",
      },
      {
        userName: "biker 9",
        email: "biker9@b.com",
        password:
          "$2a$04$SiFMMuorZ5HdqIONH/59k.fZQyHg6nrdvi7FcGt/0mz.SSQfWUwYW",
        role: "biker",
      },
      {
        userName: "biker 10",
        email: "biker10@b.com",
        password:
          "$2a$04$SiFMMuorZ5HdqIONH/59k.fZQyHg6nrdvi7FcGt/0mz.SSQfWUwYW",
        role: "biker",
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
