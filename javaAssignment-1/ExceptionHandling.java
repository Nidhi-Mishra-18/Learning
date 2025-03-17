import java.util.Scanner;

public class ExceptionHandling {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try {
            System.out.print("Enter a number to divide: ");
            int num1 = sc.nextInt();
            System.out.print("Enter a number to divide by: ");
            int num2 = sc.nextInt();

            int result = num1 / num2; 
            System.out.println("Result of division: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Error: Cannot divide by zero!");
        }
    }
}
    