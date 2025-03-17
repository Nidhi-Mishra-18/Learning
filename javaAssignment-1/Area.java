import java.util.*;

public class Area {
    //function to calculate area of circle
    public static double calculateCircleArea(double radius){
        double pi=3.14;
        return pi*radius*radius;
    }
    
    //function to calculate area of triangle
    public static double calculateTriangleArea(double base,double height){
        return 0.5*base*height;
    }

    //function to calculate area of rectangle
    public static double calculateRectangleArea (double length,double width){
        return length*width;
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);  
        System.out.println("Enter 1 to calculate the area of circle");
        System.out.println("Enter 2 to calculate the area of triangle");
        System.out.println("Enter 3 to calculate the area of rectangle");    
        int choice=sc.nextInt();
        switch (choice) {
            case 1:
                System.out.println("Enter radius of circle ");
                double r=sc.nextDouble();
                double res1=calculateCircleArea(r);
                System.out.println("Area of circle is "+res1);
                break;
            case 2:
                System.out.println("Enter base of triangle ");
                double base=sc.nextDouble();
                System.out.println("Enter height of triangle ");
                double height=sc.nextDouble();
                double res2=calculateTriangleArea(base,height);
                System.out.println("Area of triangle is "+res2);
                break;
            case 3:
                System.out.println("Enter length of rectangle");
                double length=sc.nextDouble();
                System.out.println("Enter width of rectangle");
                double width=sc.nextDouble();
                double res3=calculateRectangleArea(length,width);
                System.out.println("Area of rectangle is "+res3);
                break;
            default:
                System.out.println("You enter wrong value");
                break;
        }  
    }
}