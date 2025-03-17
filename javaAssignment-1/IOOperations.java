import java.io.*;

public class IOOperations {
    public static void main(String[] args) {
        String filePath = "C:\\Users\\AAYUSH\\Desktop\\Git Training\\javaAssignment-1\\sample.txt"; 

        File file = new File(filePath);
        if (!file.exists()) {
            System.out.println("File not found: " + filePath);
            return;  // Exit if file doesn't exist
        }
        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line); 
            }
        } catch (IOException e) {
            System.out.println("An error occurred while reading the file: " + e.getMessage());
        }
    }
}
