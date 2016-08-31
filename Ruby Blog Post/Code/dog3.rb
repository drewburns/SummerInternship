class Dog
    attr_accessor :name

    def initialize(name)
        @name = name
    end

    def bark(num)
        vocals = "Bark"
        vocals = vocals.upcase
        num.times do
            puts vocals
        end
    end
end
ralph = Dog.new("Ralph")
puts ralph.name
ralph.bark(10)


