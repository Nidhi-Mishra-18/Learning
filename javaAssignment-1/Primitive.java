import java.util.*;
public class Primitive{
    //Primitive datatypes
    public static void main(String[] args) {
        int a=10;
        char ch='a';
        int b=a;
        b=132;//Not affect the value of a
        System.out.println("Value of a "+a);System.out.println("Value of b :"+b);
    }
        
    /*reference datatypes
    public static void main(String[] args) {
        // Creating an object of a class (reference type)
        String[] names1 = {"Alice", "Bob"};
        String[] names2 = names1;  
        names2[0] = "Hello";     
        System.out.println("names1[0]: " + names1[0]);  
        System.out.println("names2[0]: " + names2[0]);  
    }
*/
}