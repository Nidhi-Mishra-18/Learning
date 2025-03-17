import java.util.*;

public class Temperature {
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.println("Choose the conversion type:");
        System.out.println("1. Celsius to Fahrenheit");
        System.out.println("2. Fahrenheit to Celsius");
        System.out.print("Enter your choice (1 or 2): ");
        int choice = sc.nextInt();

        if (choice == 1) {
            System.out.print("Enter temperature in Celsius: ");
            double celsius = sc.nextDouble();
            double fahrenheit = (celsius * 9/5) + 32;
            System.out.println(celsius + "°C is equal to " + fahrenheit + "°F.");
        }
        else if (choice == 2) {
            System.out.print("Enter temperature in Fahrenheit: ");
            double fahrenheit = sc.nextDouble();
            double celsius = (fahrenheit - 32) * 5/9;
            System.out.println(fahrenheit + "°F is equal to " + celsius + "°C.");
        } 
        else {
            System.out.println("You enter wrong choice");
        }
    }
}
