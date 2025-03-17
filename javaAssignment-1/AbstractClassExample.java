abstract class Animal {
    public abstract void sound();

    public void sleep() {
        System.out.println("This animal is sleeping.");
    }
}

class Dog extends Animal {
    public void sound() {
        System.out.println("The dog barks.");
    }
}

class Cat extends Animal {
    public void sound() {
        System.out.println("The cat meows.");
    }
}

public class AbstractClassExample {
    public static void main(String[] args) {
        Animal dog = new Dog();
        Animal cat = new Cat();

        dog.sound();
        dog.sleep();

        cat.sound();
        cat.sleep();
    }
}
