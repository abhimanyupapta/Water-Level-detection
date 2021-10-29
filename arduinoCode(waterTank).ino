
#include<ESP8266WiFi.h>
#include<ESP8266HTTPClient.h>
#include <WiFiClient.h> 




const char* ssid = "ZenFone Max Pro M2_2654";
const char* password = "12345678";



unsigned long lastTime = 0;
unsigned long timerDelay = 1000; 

const int led = 2;

const int trig1 = 16;
const int echo1 = 5;
const int trig2 = 13;
const int echo2 = 15;
const int trig3 = 14;
const int echo3 = 12;

int data1; 
int data2;
int data3;

int data;

long id = 1;

String val; 



String name = "sensor1";

void blink(int time, int data) {
    digitalWrite(led, HIGH);
    delay(time);
    digitalWrite(led, LOW);
    delay(time);
    Serial.print("Distance is: "); Serial.println(data);
    delay(500);
}

int distance(int trig, int echo) {
  digitalWrite(trig, LOW);
  digitalWrite(trig, HIGH);
  delay(10);
  digitalWrite(trig, LOW);

  int duration = pulseIn(echo, HIGH);
  int  dis = (duration*.0364)/2;
  delay(10);

  return dis;
}

void setup() {
    Serial.begin(115200);
    
    pinMode(led, OUTPUT);
    pinMode(trig1, OUTPUT);
    pinMode(echo1, INPUT);
    pinMode(trig2, OUTPUT);
    pinMode(echo2, INPUT);
    pinMode(trig3, OUTPUT);
    pinMode(echo3, INPUT);

    WiFi.begin(ssid, password);

     while (WiFi.status() != WL_CONNECTED) {
      delay(1000);
      Serial.print(".");
     }
     Serial.println("WiFi connected..!");
     Serial.println("IP: ");
     Serial.print(WiFi.localIP());

 }

void loop() {

   id++;

   data1 = distance(trig1, echo1);
   data2 = distance(trig2, echo2);
   data3 = distance(trig3, echo3);

   data = (data1 + data2 + data3)/3;

   
    

  if(data >= 5){
      blink(500, data);
      delay(100);
    }
    else if(data <= 5){
      blink(50, data);
      
    }

   delay(100);
    
  
    if(WiFi.status() == WL_CONNECTED) {
      WiFiClient client;
      HTTPClient http;

      

      //domain name with URL path or IP address with path
      http.begin(client, "http://192.168.43.118:8080/waterTank/vol");

      http.addHeader("Content-Type", "application/json");
      int httpResponseCode = http.POST("{ \"id\": " +String(id)+ ",\"name\": \"tank1\", \"volume\": "  +String(data)+  " }");
      

      Serial.print("HTTP Response code: ");
      Serial.println(httpResponseCode);
      

      http.end();
    }
    else {
      Serial.println("WiFi Discon.");
      
    }
    
}
 
