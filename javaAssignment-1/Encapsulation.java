import java.util.*;

class Person {
    private String name;
    private int age;
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getAge() {
        return age;
    }   
}

public class Encapsulation {
    public static void main(String[] args) {
        Person person = new Person();
        
        person.setName("John");
        person.setAge(25);
        
        System.out.println("Name: " + person.getName());
        System.out.println("Age: " + person.getAge());
        
        person.setAge(-5);
    }
}
