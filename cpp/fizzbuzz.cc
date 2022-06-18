#include <boost/property_tree/xml_parser.hpp>
#include <curl/curl.h>
#include <iostream>
#include <string>
// #include <memory>

// c++ -std=c++11 -lcurl

class curl_wrapper              // I need to RAII
{
public:
        curl_wrapper() : curl_(curl_easy_init(), curl_easy_cleanup)
        {
        }

        const std::string& http_get(const std::string& url)
        {
                parform_get(url);
                return buffer_;
        }
        
        operator bool() const
        {
                return curl_ != nullptr;
        }

private:

        void parform_get(const std::string& url)
        {
                buffer_.clear();
                
                curl_easy_setopt(curl_.get(), CURLOPT_URL, url.c_str());
                curl_easy_setopt(curl_.get(), CURLOPT_WRITEDATA, &buffer_);
                curl_easy_setopt(curl_.get(), CURLOPT_WRITEFUNCTION, write_call_back);

                if(curl_easy_perform(curl_.get()) != CURLE_OK)
                {
                        throw std::runtime_error("http get failed");
                }
        }
        
        static size_t write_call_back(char* c_str, size_t size, size_t mem_buffer, std::string* str)
        {
                size_t length = size * mem_buffer;

                str->append(c_str, length);

                return length;
        }

        std::unique_ptr<CURL, decltype(&curl_easy_cleanup)> curl_;
        std::string buffer_;
};

const std::string calc_query = "http://www.google.com/complete/search?output=toolbar&q=";

std::string mod_url(const int numerator, const int denominator)
{
        return calc_query + std::to_string(std::move(numerator)) + "%25" + std::to_string(std::move(denominator)); // "%25" == encode " "
}

bool parse_xml_to_divisible(const std::string& document)
{
        std::stringstream ss;
        ss << document;
       
        boost::property_tree::ptree xml_tree;
        read_xml(ss, xml_tree);

        std::string data = xml_tree.get_optional<std::string>("toplevel.CompleteSuggestion.suggestion.<xmlattr>.data").get();

        return data == "0";
}

void proc_main()
{
        curl_wrapper curl_3;
        curl_wrapper curl_5;
        
        for(int i = 1; i <= 30; ++i)
        {
                const bool divisiable_3 = parse_xml_to_divisible(curl_3.http_get(mod_url(i, 3)));
                const bool divisiable_5 = parse_xml_to_divisible(curl_5.http_get(mod_url(i, 5)));

                if(divisiable_3)
                {
                        std::cout << "Fizz";
                        if(divisiable_5)
                        {
                                std::cout << " Buzz" << std::endl;
                        }
                        else
                        {
                                std::cout << std::endl;
                        }
                }
                else
                {
                        if(divisiable_5)
                        {
                                std::cout << "Buzz" << std::endl;
                        }
                        else
                        {
                                std::cout << i << std::endl;
                        }
                }
        }
}

int main()
{
        try
        {
                proc_main();
        }
        catch(...)
        {
                throw;
        }
        
        return 0;
}
