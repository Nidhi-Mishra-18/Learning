import java.util.*;

class Parent {
    public int add(int var1, int var2) {
        return var1 + var2;
    }

    public double add(double var1, int var2) {
        return var1 + var2;
    }
}

class Child extends Parent {
    public double add(double var1, double var2) {
        return var1 + var2;
    }

    public double add(int var1, double var2) {
        return var1 + var2;
    }
}

public class Polymorphism {
    public static void main(String[] args) {
        Parent p = new Parent();
        Child c = new Child();

        int res1 = p.add(10, 20);
        System.out.println("Result of Parent's add(int, int): " + res1);

        double res2 = p.add(10.5, 20);
        System.out.println("Result of Parent's add(double, int): " + res2);

        double res3 = c.add(10.5, 20.5);
        System.out.println("Result of Child's add(double, double): " + res3);

        double res4 = c.add(10, 20.5);
        System.out.println("Result of Child's add(int, double): " + res4);
    }
}
