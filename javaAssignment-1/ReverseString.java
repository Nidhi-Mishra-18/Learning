import java.util.*;

public class ReverseString {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string to reverse: ");
        String str = sc.nextLine();

        String reverse  = new StringBuilder(str).reverse().toString();
        System.out.println("Reversed String: " + reverse);
    }
}
