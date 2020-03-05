package dataProvider;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

public class LoginCredentials {

    private Properties properties;
    private final String propertyFilePath="configs//Login.properties";

    public LoginCredentials(){
        BufferedReader reader;
        try {
            reader = new BufferedReader(new FileReader(propertyFilePath));
            properties = new Properties();
            try {
                properties.load(reader);
                reader.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            throw new RuntimeException("Login.properties not found at " + propertyFilePath);
        }
    }

    public String getdbAddress(){
        String dbAddress = properties.getProperty("dbAddress");
        if(dbAddress!= null)
            return dbAddress;
        else{
            throw new RuntimeException("dbAddress was not specified in the Configureation.properties file.");
        }
    }

    public String username(){
        String username = properties.getProperty("username");
        return username;
    }

    public String password(){
        String password = properties.getProperty("password");
        return password;
    }





    }










