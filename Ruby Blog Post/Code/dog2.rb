class Dog
    attr_accessor :name

    def initialize(name)
        @name = name
    end

    def bark
        vocals = "Bark"
        vocals = vocals.upcase
        puts vocals
    end
end
ralph = Dog.new("Ralph")
puts ralph.name
ralph.bark