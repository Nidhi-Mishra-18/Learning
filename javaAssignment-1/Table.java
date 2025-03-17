import java.util.*;

public class Table {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the number whose table you want: ");
        int num=sc.nextInt();
        System.out.println("Table of "+num);
        for (int i = 1; i <=10; i++) {
            System.out.println(num*i);
        }
    }    
}
