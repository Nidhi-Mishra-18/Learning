import java.util.*;

public class VowelCount {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string to : ");
        String str = sc.nextLine();
        int vowelCount = 0;
        str= str.toLowerCase();

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                vowelCount++;  
            }
        }
        System.out.println("Number of vowel in a string :"+vowelCount);
    } 
}
