import java.util.*;

public class Pattern {

    public static void main(String args[]){
        int n=7;
        System.out.println("Square Pattern");
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                System.out.print("* ");
            }
            System.out.println();
        }

        System.out.println("Triangle Pattern");
        for(int i=1;i<=n;i++){
            for(int j=n;j>=i;j--){
                System.out.print(" ");
            }
            for(int j=1;j<=i;j++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}