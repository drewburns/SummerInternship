class Dog
    attr_accessor :name, :vaccines

    def initialize(name)
        @name = name
        @vaccines = {}
    end

    def bark(num)
        vocals = "Bark"
        vocals = vocals.upcase
        num.times do
            puts vocals
        end
    end
    
    def add_vaccine(name,date)
        @vaccines.store(name,date)
    end
end
ralph = Dog.new("Ralph")
puts ralph.name
ralph.bark(10)
ralph.add_vaccine("Rabies",Time.now)
puts ralph.vaccines