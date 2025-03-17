import java.util.*;

interface Shapes{
    public void Area();
    public void Perimeter();
}
class Circle implements Shapes{
        public double pi=3.14;
        public double radius=4.3;
        public void Area(){
            double result=pi*radius*radius;
            System.out.println("Area of circle :"+result);
        }
        public void Perimeter(){
            double res=2*pi*radius;
            System.out.println("Perimeter of circle :"+res);
        }
}

class Triangle implements Shapes {
    public double base = 5.0;
    public double height = 3.0;
    public double hypo = 4.0;
    public double side = 5.0;  
    
    public void Area() {
        double result = 0.5 * base * height;
        System.out.println("Area of triangle: " + result);
    }

    public void Perimeter() {
        double result = base + hypo + side;
        System.out.println("Perimeter of triangle: " + result);
    }
}


public class InterfaceExample {
    public static void main(String[] args) {
        Shapes c=new Circle();
        c.Area();
        c.Perimeter();

        Shapes t=new Triangle();
        t.Area();
        t.Perimeter();
    }
}
