{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE QuasiQuotes #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE TypeFamilies #-}

import Data.Aeson (ToJSON, object, (.=))
import Data.Text (Text)
import Database.Persist.Sql (Entity(..))
import Yesod

-- Product data type
data Product = Product
    { productId :: Text
    , productName :: Text
    , productPrice :: Double
    } deriving (Show)

instance ToJSON Product where
    toJSON (Product id name price) =
        object ["id" .= id, "name" .= name, "price" .= price]

-- Cart data type
data Cart = Cart
    { cartId :: Text
    , cartItems :: [Product]
    } deriving (Show)

instance ToJSON Cart where
    toJSON (Cart id items) =
        object ["id" .= id, "items" .= items]

-- Define the Yesod app
data App = App
    { products :: [Product]
    , carts :: [Cart]
    }

mkYesod "App" [parseRoutes|
/products ProductsR GET
/cart CartR POST
|]

instance Yesod App

-- ProductsR handler
getProductsR :: Handler Value
getProductsR = returnJson $ products app

-- CartR handler
postCartR :: Text -> Double -> Handler Value
postCartR itemId itemPrice = do
    let newCart = Cart itemId [Product itemId itemName itemPrice]
    returnJson newCart

-- Run the app
main :: IO ()
main = do
    let products =
            [ Product "1" "Shirt" 20.0
            , Product "2" "Pants" 30.0
            ]
    let carts = []
    warp 3000 App {products, carts}

