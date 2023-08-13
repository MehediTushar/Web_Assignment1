"use strict";

class Animal
{
    constructor(name,sound)
    {
        this.name=name;
        this.sound=sound;
    }
    makesound()
    {
        console.log(this.sound);
    }
}
class Dog extends Animal
{
    fetch()
    {
        console.log("Fetching the ball!");
    }
}
const animal = new Animal("Lion", "Roar");
animal.makesound();

const dog = new Dog("Buddy", "Woof");

dog.makesound();
dog.fetch();