class Dog
    attr_accessor :name

    def initialize(name)
        @name = name
    end
end
ralph = Dog.new("Ralph")
puts ralph.name

