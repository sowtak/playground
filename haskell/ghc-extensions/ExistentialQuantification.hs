data Self = forall a. Self { self :: a, unself :: a -> Self }

unselfId :: Self -> Self
unselfId s = unself s self 

