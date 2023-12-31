import React from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import LoginSignup from "../Authentication/LoginSignup";

const products = [
  {
    name: "Product 1",
    price: 19.99,
    image: "data:image/jpeg;base64,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",
  },
  {
    name: "Product 2",
    price: 29.99,
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH4ArQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQBAgUGB//EADQQAAICAgAFAgMGBQUBAAAAAAECAAMEEQUSITFBUWETInEGFDKBkdFCYqGx4QdSgsHwJP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+oxEQEREBERAREQEREBERAREQERNWsRGCs4DHsD3gbRMHoesAwMxEQEREBERAREQEREBERAREQEREBETBJUbGj7GBrdaKa+dux7EddfWUvhorveCzg/MV7nc2uFuM73Y4+LQ/Wyo9wfJEpZmdj4xqfEYu1p6UDx6n2gdOnIU1NZZoJrY9vabUPzrs+SdfSUMeuy9w9vyp3Wsf3PvOko0NQN4iPOh33qAmdSNmIybKRy2LXoM6HYV/Kn3HT9RJQYGsREBERAREQEREBESHNy8bh+HbmZtopx6ht3b+gA8kwJpgkdvPpPmXF/9UbxYy8LwK0qHZsliWP5KRr9Zxh9uq8/Ops4mluFaCP8A6MWwsn/ND119D+RgfYzaoOgesfE/OeX4fxXn5Q7o3MAyuh2rqRsMD5BlrK4o7P8AdcHTXn8T62Kv3PtAvcQ4l92s+Biqbcph+Adl9C0o8N4Wyubso89zHZY+/XpLXDOHrjpzHbOx2zt3J950wvSBitdCSeI1I7smnGCtfYqBm0N+YFxKhyBm8+JpYoO+g699yU2hkPId67GRCVHOWhcO2y7Bqrrdzu2sDSXH+Yev83eXcKxc/HW/ER2QkqVOgyMO6t7iaZGuYfScOy7Mvy8minMux6aLPlWk8vVgCd/nA9BERIpERAREQEREBPnn+sOXbXVwnCDEU2Cy5hv8TAgD9Nn9Z9GrZEJezZCgkKP4j6Tw/wBpuHZn214RkIaVp43w+02VY5IHNU4Hyg9j27+o8QPjeRZ3lJmJPST5i2Y+RZj5FbVX1nVlVg0yn3EixqbcrIrx8Wp7r7TypXWNsx9pUe4+x2YzfZ5ludt4+V8KkgdeV15uXfpsMfznvvsvUExVDLp+5JOyT9Z5TgnBTw3Bo4a458kW/eMlkb5VsIACD15VGt+pM95wvH+FWsiurWOgkomiDpJAN9oGQPSM7hNXE8H7rll1Tm5tIdEHWt7lmmsJ1Pf+0m5huBxMf4uAUxcluYqulfw4HTcuhge0r8UzMbJuOA1D5AXZtdG18NvAB9d95zeFYWTWhGTYwHhFboJUXs7KWhOgNlp/BWO7H/oe8g4bhPj0E3MGutYvYfVjLtdFaHar1PcnvJde0isxEQEREBERAQekyBNNq2+VgeU6Oj2PpAjclpRzccvy302mjJp2a7h/D6g+oMu32JRW1lzBUUbJM4dj28Vt5dMmMOyeX9z+0qLH2g+6HFxqOO8Pw+IcSccz1NWrCtfrKWPj1U1NXwvh+PgI403wawpP6TrV8Pq+K1rLzWv1Zz1JPaWloVewEiuPhcLSnRA6+TrvOrVWFHQSYIB4mwWAUeBJqwF+siZ+VGKqWIGwB3Mhag3ZePl15FqcikPWD8lin1Hgg9j9RAscPzRmY4t+DdQ4Yo9VycrKwOiPf2I2D4keVkWXboxXKAdLLR49l9/fxMtYbvlQkV9iw/i9h+82VQqhVGgBoAeIEOPjV0VhK1CrJtTMQMamYiAiIgIiICboh7t0HibV1+W/SLHdb60+EWrYEFh/CfcenvAivZwiPQosG/mAPUr7SHKsx8IPk2nk5gAfVvTQ9Yyr8bhOOzkkB2JWoHufRR4E4KrkcUyBflbCj8CDsolQZr+KXiy0FaVPyV+PqfedjGoWpQAIx6FrQACWlGpFABMxNXdUGz57CBk6A2ZXycpKE+JZzcnMFJUb1vyfQe8GwtIMVLceu4ZWT8avnZkdgAVQ9eU+OnYH01uVFlFK2O/xCVYD5SdgH2mwJvHkVev+/wDxK1TnNOwCuOO2+9n+P7y8B/SRQDQ0O0zEQEREBERAREQEkrXy00XW+smBgRs9dz3YtiMNL5GgynyDIsvMr4biL8R2ts1pFJ+Zz/7zN8vKGNXsDmc/hT1nJTFsyLjkZJ5nP6D2EoppRdn5H3nMPMx7KOyj0E69NK1jQEkrrCjQEkAkACZiZgJFehddjuOuvWSxAoM61IXchVHcmVES3iNoawFMVTsVkdX9z+06z0VWNtkBM2VQOwgYRQqgAdBN4iAiIgIiICIiAiIgJksddpiIEPwAXLuSzHyZIFAm0QMRMxAREQEREBERAREQEREBERAREQP/2Q==",
  },
  // Add more product data here
];

function Home() {
  return (
    <>
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 font-custom">Featured Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </main>
      
    </div>
    <Footer />
    </>
  );
}

export default Home;
